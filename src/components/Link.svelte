<script>
    export let className;
    export let href;
    export let src;
    export let alt;
</script>

    <a href={href} class={className}>

        <img src={src} alt={alt}>

    </a>


<style>

    a{
        display: inline-block;
        width: 5.7rem;
		height: 5.7rem;
		border-radius: 50%;
		padding: 1.8rem 2.2rem;
		margin: 0.2rem;
        transition: all 0.5s;
    }

    a:hover{
		background-color: #0D9F8E;
    }

    .footer{
        background-color: #0D9F8E;
        /* border: 1px solid #0D9F8E; */
        margin: 0 2rem 0 0;
    }

    .footer:hover{
		background: none;
        /* border: 1px solid #fff; */
    }

    .twitter{
        padding: 1.9rem;
    }

    .facebook{
        padding: 1.6rem 2.2rem;
    }

    .git{
        padding: 1.1rem;
    }

</style>