<template>
    <nav class="navbar flex justify-between items-center px-32 py-14 bg-[#FF5858] max-sm:p-10">
        <div class=" text-center flex gap-2 text-[26px]">
            <p class="font-bold">Barakatih</p>
            <p class=" text-white">Kitchen</p>
        </div>
        <div class="flex gap-10 text-[17px]">
            <RouterLink to="/" class="a-link">Beranda</RouterLink>
            <RouterLink to="/" class="a-link">Kategori</RouterLink>
            <RouterLink to="/" class="a-link">Produk</RouterLink>
            <RouterLink to="/" class="a-link">Testimoni</RouterLink>
        </div>
    </nav>

</template>

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


    a.a-link:hover:after{
        width: 100%;
    }




</style>

