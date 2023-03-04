<template>
  <myHeader></myHeader>
  <section class="hero flex bg-[#FF5858] h-100 w-100 px-32 pb-24 pt-5  max-sm:p-10 max-sm:block" ref="Home" id="home">
    <div class="container  text-white">
      <p class="text-[67px] max-sm:text-[40px] leading-normal font-bold mb-10">Nikmati Dan Rasakan Kelezatannya</p>
      <p  class="mb-12 w-72">Menyediakan berbagai macam kue dan menerima request yang diajukan pelanggan.</p>
      <a href="" class=" bg-[#421707] px-5 py-3 rounded-md">Selengkapnya</a>
    </div>
    <div class="container py-14">
      <div class=" border-black border-[1px] w-96 h-96 m-auto max-sm:w-[18rem]">
        <div class="flex">
          <div class="">
            <div class="px-5 py-5 bg-[#fff] opacity-70 text-[#421707] font-bold text-sm w-[10rem] -mt-20 -ml-5 rounded-md">
              <p>Harga Terjangkau</p>
            </div>
          </div>
          <div class="">
            <div class=" flex justify-center px-3 py-2 bg-black w-8 rounded-full -mt-4">
              <div class=" bg-white p-2 rounded-full"></div>
            </div>
          </div>
          <div class="">
            <div class="bg-white px-7 py-5 rounded-md -mt-20 ml-10 w-64 text-sm">
              <img src="../assets/product.png" alt="">
              <div class=" flex flex-col gap-3">
                <p class=" font-bold">Kue Coklat</p>
                <p class=" text-[#404040]">Topping: Oreo,Meses</p>
                <p class=" font-bold">Rp 35.000</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex -mt-10">
          <div class="">
            <div class="bg-white px-7 py-5 rounded-md -ml-20 w-64 text-sm">
              <img src="../assets/product.png" alt="">
              <div class=" flex flex-col gap-3">
                <p class=" font-bold">Kue Coklat</p>
                <p class=" text-[#404040]">Topping: Oreo,Meses</p>
                <p class=" font-bold">Rp 35.000</p>
              </div>
            </div>
          </div>
          <div class="">
            <div class=" flex justify-center px-3 py-2 bg-black w-8 rounded-full mt-[10.6rem] ml-10">
              <div class=" bg-white p-2 rounded-full"></div>
            </div>
          </div>
          <div class="">
            <div class="px-5 py-5 bg-[#fff] rounded-md opacity-70 text-[#421707] font-bold text-sm w-[11rem] mt-[13rem] ml-2 text-center">
              <p>Lezat dan Menarik</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  

  <section class="text-center py-20 px-32 max-sm:px-10" id="kategori">
    <p class="font-bold text-2xl "  ref="Kategori">Kategori</p>
    <p class="text-[#25252579] mt-5">Menyediakan berbagai macam kue untuk melengkapi harimu terasa nikmat.</p>
    <div class="grid grid-cols-3 gap-14 max-sm:gap-15 my-10 place-items-center max-sm:grid-cols-2">
      <div class=" cursor-pointer rounded-md bg-[#FF99001A] text-center py-10 px-10 hover:bg-[#ff990023]" v-for="data in dataKategori" :key="data.id" @click="this.idKategori = data.id">
        <div class="circle flex rounded-full w-14 h-14 bg-[#FF5858] justify-center items-center">
          <p class=" text-xl mautoy-">{{ data.id }}</p>
        </div>
        <div class=" self-center m-auto w-60 h-56 max-sm:w-[4rem] max-sm:h-[4rem]">
          <img :src="data.kategori_image" :alt="data.kategori" class=" w-3/4 max-sm:w-1/2 m-auto"/>
        </div>
        <p class="text-[#421707] text-2xl font-bold">{{ data.kategori }}</p>
      </div>
    </div>
  </section>

  


  <section class="text-center py-20 px-32 bg-[#FF5858] max-sm:p-10" id="produk">
    <p class="font-bold text-2xl"  ref="Produk">Rekomendasi Produk</p>
    <p class="text-white mt-5">Disini kami menampilkan kue yang paling sering dicari dan laris oleh para pelanggan.</p>
    <div class="grid grid-cols-3 place-items-center my-10 gap-20 max-sm:grid-cols-2">
        <div class="bg-white p-10 w-auto rounded-md max-sm:w-40 max-sm:p-2 " v-for="produk in dataProduk" :key="produk.id">
          <div class=" w-full mb-5 rounded-md">
            <img :src="produk.image" class=" rounded-md">
          </div>
          <div class="grid content px-5 gap-5 max-sm:text-sm">
            <p class="text-[#421707] text-2xl font-bold max-sm:text-xl">{{ produk.nama }}</p>
            <p class="text-[#bbbbbb]">{{ produk.description }}</p>
            <div class="flex justify-around items-center">
              <p>{{ produk.rating }}</p>
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 rounded-full bg-[#D9D9D9CC]"></div>
                <p>{{ produk.review }} Review</p>
              </div>
              <div class="cursor-pointer hover:bg-[#dadada4c] rounded-full w-8 h-9 flex">
                <font-awesome-icon :icon="[ 'fas', 'arrow-right' ]" class="text-lg m-auto" />
              </div>
            </div>
          </div>
        </div>
    </div>

  </section>


  <section class="text-center py-20 px-48 max-sm:p-10" id="testimoni">
    <p class="font-bold text-2xl"  ref="Testimoni">Testimoni</p>
    <p class="text-white mt-5 text-[#25252579]">Berikut merupakan testi-testi dari pelanggan kami yang puas dengan pembelian kue di Kitchen Barakatih.</p>
    <div class="flex mt-36 gap-56 items-center max-sm:block">
      <div class="w-[340px] h-[340px] max-sm:w-[260px] max-sm:h-[260px] border-[1px] border-[#aeaeae] rounded-md  max-sm:my-5">
        <div class="rectangle w-full  h-full bg-[#FF9900] rounded-md">
            <!-- <img src="../assets/testimoni/1.png"> -->
        </div>
      </div>
      <div class="border-[#aeaeae] border-[1px] rounded-md px-10 py-14 max-sm:p-8 font-medium">
        <p class="">Enak banget mba kuenya,,meleleh pas digigit di mulut, rasanya pas, dan bikin nagih... </p>
      </div>
      
    </div>
    <div class="flex mt-36 gap-56 items-center max-sm:block">
      <div class="border-[#aeaeae] border-[1px] rounded-md px-10 py-14 max-sm:p-8 font-medium  max-sm:my-20">
        <p class="">Enak banget mba kuenya,,meleleh pas digigit di mulut, rasanya pas, dan bikin nagih... </p>
      </div>
      <div class="w-[340px] h-[340px] max-sm:w-[260px] max-sm:h-[260px] border-[1px] border-[#aeaeae] rounded-md">
        <div class="rectangle w-full  h-full bg-[#FF9900] rounded-md">
            <!-- <img src="../assets/testimoni/1.png"> -->
        </div>
      </div>
      
    </div>
    
  </section>
  <myFooter></myFooter>

</template>

<script >
  import myHeader from './partials/navbar.vue'
  import myFooter from './partials/footer.vue'

  import axios from 'axios';

  export default {
    data(){
      return {
        dataKategori : '',
        idKategori : 1,
        dataProduk : ''
      }
    },
    components:{
      myHeader,
      myFooter
    },

    created(){
      this.getData()
    },
    methods:{
      getData(){
        axios.get('data.json')
          .then(ress =>{
            this.dataKategori = ress.data
          })
          .catch(err => {
            console.log(err)
          })
      },
      filterData(){
        axios.get('data_produk.json')
          .then(ress=> {
            this.dataProduk= ress.data.filter(item => {return item.idKategori == this.idKategori})
          })
          .catch(err =>{
            console.log(err)
          })
      },
      
      
      
    },
    updated(){
      this.filterData()
    }
  }

</script>


<style scoped>
  .circle{
    margin-top: -55px;
    margin-left: -55px;
  }

  .rectangle{
    margin-top: -40px;
    margin-left: 40px;
  }


</style>
