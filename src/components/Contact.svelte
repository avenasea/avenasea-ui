<script>
import Button from "./Button.svelte";


</script>

<section>

<div class="form container">

    <div class="form-text">
        <h3 class="color-heading">Etiam et arcu enim in pulvinar</h3>
        <h2>To get the latest updates subscribe now!</h2>
        <p>Nullam fermentum accumsan nibh, in ultricies elit lacinia in. Etiam viverra vel magna ut ultricies. Nulla hendrerit tincidunt posuere.</p>
    </div>

    <form>
            <input
                id="input-name"
                class="_req  input"
                placeholder="First name"
            />

            <input
                id="input-email"
                class="_req _email input"
                placeholder="Email address"
            />

        <Button className={''} content={'Subscribe now'} href={'/'}/>
    </form>

</div>

</section>

<style>

    section{
        margin-top: -50rem;
        padding: 61rem 0 5rem 0;
        background: url(/images/Avenasea-BG2.jpg);
    }

    .form-text{
        text-align: center;
        width: 67rem;
        margin: 0 auto;
    }

    form{
        margin-top: 5rem;
        display: flex;
        justify-content: space-between;
    }

    .form{
        background: url(/images/BG.svg) no-repeat;
        padding: 7.2rem 6rem 12rem 6rem;
    }
    
    h2{
        margin-top: 0.4rem;
    }

    form .input{
        background: #0A1134;
        color: #fff;
        border-radius: 15rem;
        border: none;
        font-size: 1.8rem;
        padding: 1.7rem 2.8rem;
        width: 38rem;
        /* display: block; */
        /* margin: 0 20px; */
    }

</style>