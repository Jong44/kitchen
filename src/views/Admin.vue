<script>
    import axios from 'axios';
    import { initializeApp } from "firebase/app";
    import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
    import Swal from 'sweetalert2'

    export default{
        data(){
            return{
                filterParam: "",
                dataProoduk: '',
                dataKategori: '',
                showModal: false,
                form: {
                    nama : "",
                    harga : "",
                    deskripsi : "",
                    harga : "",
                    gambar : "",
                    nama_kategori : ""
                },
                alert : ""
            }
        },
        created(){

            const firebaseConfig = {
                apiKey: "AIzaSyCAtOEcyjq2AzXzHsHDrsygiJGe_-6KT98",
                authDomain: "kitchen-63271.firebaseapp.com",
                databaseURL: "https://kitchen-63271-default-rtdb.firebaseio.com",
                projectId: "kitchen-63271",
                storageBucket: "kitchen-63271.appspot.com",
                messagingSenderId: "341582534958",
                appId: "1:341582534958:web:7d25492395cbdd90cc42bf",
                measurementId: "G-2BSG747H4W"
            };
            const firebaseApp = initializeApp(firebaseConfig);

            this.getData();
            this.getCategori();

        },
        methods:{
            getData(){
                axios.get('data_produk.json')
                    .then(ress=>{
                        this.dataProoduk = ress.data
                    })
                    .catch(err =>{
                        console.log(err)
                    })
            },
            getCategori(){
                axios.get('data.json')
                    .then(ress =>{
                        this.dataKategori = ress.data
                    })
                    .catch(err => {
                        console.log(err)
                    })
            },
            async uploadImage(event) {
                const file = event.target.files[0];
                const storage = getStorage();
                const storageRef = ref(storage, `product/${file.name}`);
                await uploadBytes(storageRef, file);
                const imageUrl = await getDownloadURL(storageRef);
                this.form.gambar = imageUrl
            },
            addProduct(){
                axios.post('data_produk.json', this.form)
                    .then(response => {
                        this.alert = "Success Menambahkan Data"
                        console.log(response)
                        this.SuccessAlert(this.alert)
                    })
                    .catch(error => {
                        // Error
                        console.error(error)
                    })
            },
            SuccessAlert(alert){
                Swal.fire({
                    title: "Success!",
                    icon: "success",
                    text : alert
                })
            },
            filter(){
                axios.get('data_produk.json')
                    .then(ress=> {
                        this.dataProoduk= ress.data.filter(item => {
                            return item.nama.toLowerCase().includes(this.filterParam.toLowerCase())
                        })
                    })
                    .catch(err =>{
                        console.log(err)
                    })
            }
        }
    }


</script>

<template>
    <nav class=" flex px-20 py-10 justify-between items-center text-gray-400">
        <div class="flex  items-center gap-5">
            <div class=" w-14 h-14 rounded-full bg-black">
            </div>
            <p>Barakatih Kitchen</p>
        </div>
        <div class="flex items-center border border-gray-400 px-3 py-2 gap-5 rounded-md">
            <font-awesome-icon :icon="[ 'fas', 'search' ]"/>
            <input type="text" placeholder="Search Cake" class="input" @input="filter()" v-model="filterParam">
        </div>
    </nav>
    <button class="px-5 py-2 bg-[#FF5858] my-10 mx-20 rounded-md text-white" @click="showModal = true">
        Unggah Produk
    </button>
    <section class="px-20">
        <div class="grid grid-cols-3 gap-20">
            <div class=" w-[322px] h-[420px] border rounded-xl border-[#B2B2B2] p-7"  v-for="produk in dataProoduk" :key="produk.id">
                <div class=" h-[13rem] mb-5">
                    <img :src="produk.image" class=" object-fill w-full h-full rounded-xl" alt="">
                </div>
                <p class=" text-center font-bold">{{ produk.nama }}</p>
                <div class="flex justify-center gap-3 mt-2 opacity-50">
                    <p>{{ produk.nama_kategori }}</p>
                    <p>|</p>
                    <p>{{ produk.harga }}</p>
                </div>
                <div class="flex justify-center">
                    <button class="px-10 py-2 bg-[#FF5858] rounded-md text-white mt-5">
                    Ubah
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- MODAL -->
    <div class=" bg-[#0007] fixed inset-0 overflow-y-hidden flex flex-1 justify-center" v-if="showModal">
        <div class=" bg-white w-[30rem] m-auto px-10 py-5">
            <form @submit.prevent="addProduct" >
                <p class=" font-bold text-center">Unggah Produk</p>
                <div class="mt-5">
                    <p class=" font-bold mb-3">Nama Produk</p>
                    <input type="text" class=" border w-full rounded-md p-2 text-sm" v-model="form.nama">
                </div>
                <div class="mt-5">
                    <p class=" font-bold mb-3">Deskripsi</p>
                    <textarea type="text" class=" border w-full rounded-md p-2 h-32 text-sm resize-none" v-model="form.deskripsi"></textarea>
                </div>
                <div class="mt-5">
                    <p class=" font-bold mb-3">Harga</p>
                    <input type="text" class=" border w-full rounded-md p-2 text-sm" v-model="form.harga">
                </div>
                <div class="mt-5">
                    <p class=" font-bold mb-3">Kategori</p>
                    <div class="flex items-center border rounded-md p-2 gap-5">
                        <font-awesome-icon :icon="[ 'fas', 'chevron-down' ]"/>
                        <select name="" id="" class=" w-full appearance-none border-0 active:outline-0 focus:outline-0" v-model="form.nama_kategori">
                            <option value="" v-for="kategori in dataKategori" :key="kategori.id">
                                {{ kategori.kategori }}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="mt-5">
                    <p class=" font-bold mb-3">Unggah Gambar</p>
                    <input class=" p-5 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50" id="file_input" type="file" @change="uploadImage">
                </div>
                <div class=" flex justify-between">
                    <button class="px-5 py-2 mt-5 rounded-md border" @click="showModal = false">
                    Batal
                    </button>
                    <button class="px-5 py-2 bg-[#FF5858] mt-5 rounded-md text-white" type="submit">
                    Tambah
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
    .input:focus, .input, .input:active, .input:hover{
        border: none;
        border-color: transparent;
        outline: 0px;
    }
</style>