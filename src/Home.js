import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';

function Home() {
    return (
        <div className= 'home'>
           <Banner />


           <div className='home_section'>
               <Card
               src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=480"
               title="Unique stays"
               description="Spaces that are more than just a place to sleep." />
               <Card
               src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=480"
               title="Online Experiences"
               description="Unique activities we can do together, led by a world of hosts." />
               <Card
               src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=480"
               title="Entire Homes"
               description="Comfortable private places, with room for friends or family." />

           </div>
           <div className='home_section'>
               <Card
               src="https://a0.muscache.com/im/pictures/5cb10360-e648-4a64-8c9b-51f1a0f06b62.jpg?aki_policy=xx_large"
               title="3003 Seascape Villas"
               description="Entire villa hosted by Island Rentals Of Hilton Head"
               price="$80/ night"
            />
    
               <Card
               src="https://a0.muscache.com/im/pictures/f7449965-20d1-4b36-a6f7-5c17459ef8c5.jpg?aki_policy=xx_large"
               title="Cabin w/ sweeping mountain views, a private hot tub, and shared pool access!"
               description="Entire cabin hosted by Vacasa Smoky Mountains"
               price="$172/ night"
            />
               <Card
               src="https://a0.muscache.com/im/pictures/44d38216-ba05-4d0e-a55e-9dabcfbd0e34.jpg?aki_policy=xx_large"
               title="Private home w/small heated pool, hot tub - walk to beach, dogs OK!"
               description="Entire house hosted by Vacasa Georgia"
               price="$420/ night"
            />

           </div>
        </div>
    )
}

export default Home
 
