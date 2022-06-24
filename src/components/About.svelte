<script>
    
</script>
    
    <section id="hotels">
    
        <div class="container about-us">
            <div class="booking-image">
                <img src="/images/booking.svg">
            </div>
            <div class="about-us-text">
                <h3 class="color-heading">Curabitur mollis, lectus quis</h3>
                <h2>Proin non tempus sem, nec convallis odio. <span>Fusce convallis massa sed congue maximus</span></h2>
                <p>Nullam fermentum accumsan nibh, in ultricies elit lacinia in. Etiam viverra vel magna ut ultricies. Nulla hendrerit tincidunt 
                   posuere. Pellentesque lectus ante, ullamcorper in lacinia in, egestas id massa.</p>
            </div>
        </div>
    
    </section>


    <style>
        section{
            margin-top: -2.4rem;
        }

        .about-us{
            padding: 0 2rem;
            display: flex;
            justify-content: space-between;
        }

        .about-us-text{
            width: 57rem;
            max-width: 60%;
            margin-left: -6.4rem;
            margin-top: 15rem;
        }

        h2{
            margin-top: 0.5rem;
        }

        .booking-image{
            /* width: 67rem; */
            max-width: 60%;
            background: url(/images/booking-background.svg) no-repeat;
            background-size: cover;
            border-radius: 20px;
            border: 1px solid #354BAF;
            padding: 10rem 2.9rem;
            box-shadow: 0px 0px 45px 25px rgb(0 0 0 / 20%);
        }

        .booking-image img{
            width: 100%;
        }


        span{
            font-weight: 300;
        }

        p{
            margin-top: 2rem;
        }

        
        @media (max-width: 1130px) {

            section{
                margin-top: 5rem;
            }

        }

        @media (max-width: 680px) {


            .about-us{
                padding: 0;
                width: 100%;
                flex-direction: column;
            }

            .about-us-text{
                margin: 2rem 0 0 0;
                max-width: 100%;
            }

            .booking-image{
                max-width: 100%;
                padding: 6.5rem 2.9rem;
            }

            
        }


    </style>