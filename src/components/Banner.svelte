<script>
import About from "./About.svelte";
import Button from "./Button.svelte";


</script>

<section>

    <div class="banner">
        <div class="banner-text">
            <h2 class="color-heading">Etiam et arcu enim in pulvinar</h2>
            <h1>Proin interdum enim velit</h1>
            <p>Nullam fermentum accumsan nibh, in ultricies elit lacinia in. Etiam viverra vel magna ut ultricies. Nulla hendrerit tincidunt
               posuere. Pellentesque lectus ante, ullamcorper in lacinia in, egestas id massa.</p>
            <Button className={''} content={'Call to action'} href={'/'}/>
        </div>
        <img src="/images/hotel-1.svg">
    </div>

    <About />

</section>



<style>

    section{
        margin-top: -7.5rem;
        background: url(/images/Avenasea-BG1.jpg);
    }

    .color-heading{
        padding-top: 20.5rem;
    }

    h1{
        font-size: 7.4rem;
        line-height: 7.4rem;
        font-weight: 700;
        margin-top: -1.8rem;
    }

    p{
        margin: 2rem 0 4.3rem 0;
    }

    .banner{
        width: 133rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }

    .banner-text{
        width: 67rem;
        max-width: 60%;
        margin-left: 10rem;
    }

    img{
        width: 51.4rem;
        margin-top: 12rem;
    }



</style>

