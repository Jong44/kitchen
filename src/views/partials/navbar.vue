<template>
    <nav class="navbar flex justify-between items-center px-32 py-14 bg-[#FF5858] max-sm:p-10">
        <div class=" text-center flex gap-2 text-[26px]">
            <p class="font-bold">Barakatih</p>
            <p class=" text-white">Kitchen</p>
        </div>
        <div class="flex gap-10 text-[17px]">
            <p @click="scrollDashboard()" class="a-link cursor-pointer">Beranda</p>
            <p @click="scrollKategori()"  class="a-link cursor-pointer">Kategori</p>
            <p @click="scrollProduk()" class="a-link cursor-pointer">Produk</p>
            <p @click="scrollTestimoni()"   class="a-link cursor-pointer">Testimoni</p>
        </div>
        <div class="hidden max-sm:block cursor-pointer" @click="menu = !menu">
            <font-awesome-icon :icon="[ 'fas', 'bars' ]" class="text-lg m-auto" />
        </div>
        <div class="menu" v-show="menu">
            <RouterLink to="/" class=""><p @click="scrollDashboard()">Beranda</p></RouterLink>
            <RouterLink to="/" class=""><p @click="scrollKategori()">Kategori</p></RouterLink>
            <RouterLink to="/" class=""><p @click="scrollProduk()">Produk</p></RouterLink>
            <RouterLink to="/" class=""><p @click="scrollTestimoni()">Testimoni</p></RouterLink>
        </div>
    </nav>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
        data(){
            return{
                menu: false
            }
                
            
        },
        methods:{
            scrollDashboard(): void{
                const id = document.getElementById('dashboard')
                if(id){
                    id.scrollIntoView({behavior: 'smooth'})
                }
            },
            scrollKategori (): void{
                const id = document.getElementById('kategori')
                if(id){
                    id.scrollIntoView({behavior: 'smooth'})
                }
            },
            scrollProduk (): void{
                const id = document.getElementById('produk')
                if(id){
                    id.scrollIntoView({behavior: 'smooth'})
                }
            },
            scrollTestimoni (): void{
                const id = document.getElementById('testimoni')
                if(id){
                    id.scrollIntoView({behavior: 'smooth'})
                }
            },
        }
    })
</script>

<style scoped>

    @media only screen and (max-width: 640px){
        .a-link{
            display: none;
        }
    }

    *{
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins';
    }

    .a-link::after{
        margin-top: 5px;
        content: '';
        display: block;
        width: 0;
        height: 1.5px;
        background: white;
        transition: width .3s;
    }


    .a-link:hover:after{
        width: 100%;
    }

    .menu{
        position: absolute;
        top: 80px;
        right: 20px;
        width: 200px;
        background-color: white;
        color: #000;
        height: 150px;
        padding: 30px;
        border-radius: 10px;
    }




</style>

