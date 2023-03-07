<template>
    <footer class=" flex h-100 bg-[#FF5858] px-36 py-20 text-white gap-56 max-sm:block max-sm:p-10">
        <div class="container text-2xl ">
            <span class="text-[#421707] mr-3 font-bold cursor-pointer" @click="toTop">Barakatih</span>
            <span class="cursor-pointer" @click="toTop">Kitchen</span>
            <p class="my-5 mb-10 text-base">Kami memberikan kualitas yang terbaik untuk produk kami. Yuk pesan sekarang!</p>
            <a href="" class=" bg-[#421707] px-5 py-3 rounded-md text-sm">Beli Disini</a>
        </div>
        <div class="grid container justify-self-center max-sm:my-12">
            <p class="text-[#421707] gap-3 mr-3 text-2xl font-bold">Melayani</p>
            <RouterLink to="/">Kategori</RouterLink>
            <RouterLink to="/">Produk</RouterLink>
            <RouterLink to="/">Testimoni</RouterLink>
        </div>
        <div class="container max-sm:my-12">
            <p class="text-[#421707] mr-3 text-2xl font-bold">Kontak</p>
            <div class="flex gap-3 items-center mt-5 mb-3">
                <font-awesome-icon :icon="[ 'far', 'envelope' ]" class="text-lg" />
                <p>example@gmail.com</p>
            </div>
            <div class="flex gap-3 items-center mb-5">
                <font-awesome-icon :icon="[ 'fas', 'phone-volume' ]" class="text-lg" />
                <p>+6281225500632</p>
            </div>
            <div class="flex gap-5 max-sm:my-5">
                <a href="https://www.instagram.com/bara.katihkitchen/" target="_blank">
                    <font-awesome-icon :icon="[ 'fab', 'instagram' ]" class="text-lg" />
                </a>
                <a href="https://twitter.com/" target="_blank">
                    <font-awesome-icon :icon="[ 'fab', 'twitter' ]" class="text-lg" />
                 </a>
                <a href="https://www.facebook.com/" target="_blank">
                    <font-awesome-icon :icon="[ 'fab', 'facebook' ]" class="text-lg" />
                </a>
            </div>
        </div>
    </footer>
</template>

<script>
export default{
    methods:{
        toTop(){
        window.scroll({
          top:0,
          behavior: "smooth"
        })
      },
    }
}
</script>

<style scoped>

    footer{
        position: relative;
        bottom: 0;
    }

</style>