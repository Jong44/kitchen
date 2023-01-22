<template>
  <section class="hero flex bg-[#FF5858] h-100 w-100 px-32 pb-24 pt-5">
    <div class="container  text-white">
      <p class="text-[67px] leading-normal font-bold mb-10">Nikmati Dan Rasakan Kelezatannya</p>
      <p  class="mb-12 w-72">Menyediakan berbagai macam kue dan menerima request yang diajukan pelanggan.</p>
      <a href="" class=" bg-[#421707] px-5 py-3 rounded-md">Selengkapnya</a>
    </div>
    <div class="container py-14">
      <div class=" border-black border-[1px] w-96 h-96 m-auto">
      </div>
    </div>
  </section>
  

  <section class="text-center py-20 px-32">
    <p class="font-bold text-2xl">Kategori</p>
    <p class="text-[#25252579] mt-5">Menyediakan berbagai macam kue untuk melengkapi harimu terasa nikmat.</p>
    <div class="grid grid-cols-3 gap-14 my-10 place-items-center">
      <div class=" cursor-pointer rounded-md bg-[#FF99001A] text-center py-10 px-10 hover:bg-[#ff990023]" v-for="data in dataKategori" :key="data.id" @click="this.idKategori = data.id">
        <div class="circle flex rounded-full w-14 h-14 bg-[#FF5858] justify-center items-center">
          <p class=" text-xl mautoy-">{{ data.id }}</p>
        </div>
        <div class=" self-center m-auto w-60 h-56">
          <img :src="data.kategori_image" :alt="data.kategori" class=" w-3/4 m-auto"/>
        </div>
        <p class="text-[#421707] text-2xl font-bold">{{ data.kategori }}</p>
      </div>
    </div>
  </section>

  


  <section class="text-center py-20 px-32 bg-[#FF5858]">
    <p class="font-bold text-2xl">Rekomendasi Produk</p>
    <p class="text-white mt-5">Disini kami menampilkan kue yang paling sering dicari dan laris oleh para pelanggan.</p>
    <div class="grid grid-cols-3 place-items-center my-10 gap-20">
        <div class="bg-white p-5 w-auto rounded-md " v-for="produk in dataProduk" :key="produk.id">
          <div class=" w-full">
            <img :src="produk.image" class="">
          </div>
          <div class="grid content px-5 gap-5">
            <p class="text-[#421707] text-2xl font-bold">{{ produk.nama }}</p>
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


  <section class="text-center py-20 px-48">
    <p class="font-bold text-2xl">Testimoni</p>
    <p class="text-white mt-5 text-[#25252579]">Berikut merupakan testi-testi dari pelanggan kami yang puas dengan pembelian kue di Kitchen Barakatih.</p>
    <div class="flex mt-36 gap-56 items-center">
      <div class="w-[340px] h-[340px] border-[1px] border-[#aeaeae] rounded-md">
        <div class="rectangle w-full  h-full bg-[#FF9900] rounded-md">
            <!-- <img src="../assets/testimoni/1.png"> -->
        </div>
      </div>
      <div class="border-[#aeaeae] border-[1px] rounded-md px-10 py-14 font-medium">
        <p class="">Enak banget mba kuenya,,meleleh pas digigit di mulut, rasanya pas, dan bikin nagih... </p>
      </div>
      
    </div>
    <div class="flex mt-36 gap-56 items-center">
      <div class="border-[#aeaeae] border-[1px] rounded-md px-10 py-14 font-medium">
        <p class="">Enak banget mba kuenya,,meleleh pas digigit di mulut, rasanya pas, dan bikin nagih... </p>
      </div>
      <div class="w-[340px] h-[340px] border-[1px] border-[#aeaeae] rounded-md">
        <div class="rectangle w-full  h-full bg-[#FF9900] rounded-md">
            <!-- <img src="../assets/testimoni/1.png"> -->
        </div>
      </div>
      
    </div>
    
  </section>

</template>

<script >

  import axios from 'axios';

  export default {
    data(){
      return {
        dataKategori : '',
        idKategori : 1,
        dataProduk : ''
      }
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
