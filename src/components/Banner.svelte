<script>
import About from "./About.svelte";
import Button from "./Button.svelte";


</script>

<section>

    <div class="banner">
        <div class="banner-text">
            <h2 class="color-heading">HOTELS AND COMPANIES</h2>
            <h1>Corporate travel simplified</h1>
            <p>Use our custom negotiation interface for defining corporate travel agreements between corporations and hotels.</p>
            <Button className={''} content={'SUBSCRIBE'} href={'/'}/>
        </div>
        <img src="/images/hotel-1.svg">
    </div>

    <About />

</section>



<style>

    section{
        margin-top: -17.5rem;
        background: url(/images/Avenasea-BG1.jpg) no-repeat;
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
        max-width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }

    .banner-text{
        width: 70rem;
        max-width: 60%;
        padding-left: 10rem;
    }

    img{
        width: 51.4rem;
        max-width: 40%;
        margin-top: 12rem;
    }

    @media (max-width: 1034px) {

        .banner-text{
            padding-left: 5rem;
        }

    }

    @media (max-width: 680px) {

        section{
            padding: 0 2rem;
        }

        h1{
            font-size: 4rem;
            line-height: 4rem;
            margin-top: -3px;
        }
        .color-heading{
            font-size: 1.6rem;
            line-height: 1.6rem;
        }
        .banner{
            width: 100%;
        }
        .banner-text{
            margin: -2rem 0 0 0;
            padding: 0;
            width: 100%;
            max-width: 44rem;
        }
        p{
            margin: 1rem 0 4.3rem 0;
        }
        img{
            display: none;
        }

    }


</style>


