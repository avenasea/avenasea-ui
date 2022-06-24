<script>
    import Link from '$components/Link.svelte';
</script>

<section class="container">

        <h4>TEAM MEMBERS</h4>
        <p class="title-p">Cras feugiat nunc in accumsan pretium. Curabitur accumsan, lorem sed sodales pulvinar, felis eros tincidunt.</p>

        <div class="team">
            <div class="dev">
                <img src="/images/dev1.png" alt="">
                <h5>JOHN DOE</h5>
                <p>DEVELOPER</p>
                <Link href={"/"} className={'twitter'} src={"/images/twitter.svg"} alt={"Twitter link"}/>
                <Link href={"/"} className={'git'} src={"/images/git.png"} alt={"GitHub link"}/>
            </div>

            <div class="dev">
                <img src="/images/dev2.png" alt="">
                <h5>JOHN DOE</h5>
                <p>DEVELOPER</p>
                <Link href={"/"} className={'twitter'} src={"/images/twitter.svg"} alt={"Twitter link"}/>
                <Link href={"/"} className={'git'} src={"/images/git.svg"} alt={"GitHub link"}/>
            </div>

            <div class="dev">
                <img src="/images/dev3.png" alt="">
                <h5>JOHN DOE</h5>
                <p>DEVELOPER</p>
                <Link href={"/"} className={'twitter'} src={"/images/twitter.svg"} alt={"Twitter link"}/>
                <Link href={"/"} className={'git'} src={"/images/git.svg"} alt={"GitHub link"}/>
            </div>

            <div class="dev">
                <img src="/images/dev4.png" alt="">
                <h5>JOHN DOE</h5>
                <p>DEVELOPER</p>
                <Link href={"/"} className={'twitter'} src={"/images/twitter.svg"} alt={"Twitter link"}/>
                <Link href={"/"} className={'git'} src={"/images/git.svg"} alt={"GitHub link"}/>
            </div>
        </div>

    

</section>


<style>

    section{
        margin-top: 0;
        position: relative;
        padding: 0 2rem;
    }

    h4{
		font-size: 4.2rem;
	}

    .title-p{
        width: 65.5rem;
        max-width: 100%;
    }

    .team{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 3rem 0 8.8rem 0;
        /* width: 100%; */
    }

    .dev{
        text-align: center;
    }

    .dev img{
        border-radius: 1rem;
    }

    .dev h5{
        font-size: 2.6rem;
        margin-top: 2.5rem;
        text-align: center;
    }

    .dev p{
        margin-top: 0rem;
    }

    .team{
        width: 100%;
        margin: 0 auto;
    }

    


    @media (max-width: 768px){

        .dev{
            width: 50%;
            padding-bottom: 4rem;
        }


        h4, .title-p{
            margin-left: 0;
            text-align: center;
        }

        

    }

    @media (max-width: 412px){

		.dev{
			width: 100%;
		}


    }

</style>