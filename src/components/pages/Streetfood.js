import React from 'react';
import '../../App.css';
import './Streetfood.css';
import FoodCard from '../FoodCard'


export default function Streetfood() {
    return (
    <>
    <h1 className ="streetfood">DELICIOUS STREETFOOD</h1>
        <div >
            <p className ='b'>Vietnam is very famous for street food. If you don't know about that, let's check it out!</p>
        </div >

        <div className='g'>
       
            <div className='a'>
                <FoodCard 
                header='Banh xeo' 
                body='The Vietnamese serve banh xeo with large lettuce leaves and fresh herbs. Take a lettuce leaf in your hand, add some herbs and a torn piece of the stuffed pancake, then roll up the leaf as if it were a spring roll and dip it in the dipping sauce.'
                img='img3.jpg'
                />
               
                <FoodCard 
                header='Bun cha' 
                body='Bún chả is a Vietnamese dish of grilled pork and noodle, which is thought to have originated from Hanoi, Vietnam. Bún chả is served with grilled fatty pork over a plate of white rice noodle and herbs with a side dish of dipping sauce.'
                img='img5.jpg'
                />
                
                <FoodCard 
                header='Pho' 
                body={`Vietnamese soup consisting of broth, rice noodles, herbs, and meat (usually beef), sometimes chicken. Pho is a popular food in Vietnam where it is served in households, street stalls and restaurants countrywide. Pho is considered Vietnam's national dish.`}
                img='img7.jpg'
                />
            </div>

            <div className='a'>
                <FoodCard 
                header='OC' 
                body={`The texture of the meat is tough and brittle. Although there are a few dishes made with these snails, they're most commonly boiled with spices such as lemongrass, ginger, and red chili peppers. Once prepared, the dish is traditionally accompanied by fish sauce for dipping on the side`}
                img='img8.jpg'
                />

                <FoodCard 
                header='Cha ca' 
                body='Chả Cá: grilled white fish, fragrant with tumeric, fish sauce, ginger and garlic, is tossed together with dill, spring onion and roasted peanuts'
                img='img9.jpg'
                />

                <FoodCard 
                header='Banh cuon' 
                body={`Bánh cuốn is made from a thin, wide sheet of steamed fermented rice batter filled with a mixture of cooked seasoned ground pork, minced wood ear mushroom, and minced shallots. Sides for this dish usually consist of chả lụa (Vietnamese pork sausage), sliced cucumber, and bean sprouts, with the dipping sauce which is fish sauce `}
                img='img10.jpg'
                />

            </div>   

            <div className='a'>
                <FoodCard 
                header='Banh mi' 
                body={`Banh Mi is the PERFECT sandwich. Rich, savory meat combined with bright and crunchy homemade pickles stuffed into a fluffy baguette`}
                img='img10.1.jpg'
                />

                <FoodCard 
                header='Bun Thit Nuong' 
                body='Thịt nướng litererally means baked or barbecued meat and in this case it’s traditionally barbecued, and the meat is always pork. You could probably do this with beef or chicken if you prefer and it would work too.'
                img='img10.2.jpg'
                />

                <FoodCard 
                header='Banh Duc Nong' 
                body={`Bánh đúc is a Vietnamese steamed rice cake. It could be sweet or savoury. In Southern Vietnam, there is banh duc la dua (green pandan rice cake served with syrup) and banh duc tom chay (savoury one with shrimp floss toppings) In northern Vietnam, bánh đúc is white in color and has a soft texture and mild flavour. It is typically garnished with savory ingredients such as ground pork and mushroom, fried shallot, and light dipping fish sauce.`}
                img='img10.3.jpg'
                />

            </div> 

            <div className='a'>
                <FoodCard 
                header='Goi cuon' 
                body={`Goi Cuon are Vietnamese fresh spring rolls. They are also called Summer Rolls. Unlike fried Vietnamese spring rolls, these fresh rolls are commonly wrapped with Vietnamese rice paper with rice vermicelli, fresh vegetables, herbs, boiled shrimp and sliced pork.`}
                img='img10.4.jpg'
                />

                <FoodCard 
                header='Chao Long' 
                body='Often described as a porridge or a congee, cháo long is a Vietnamese dish that combines pork bone broth, rice, and various pork offal such as liver, kidney, spleen, intestines, or hearts.'
                img='img10.5.jpg'
                />

                <FoodCard 
                header='Nom Bo Kho' 
                body={`“Nộm bò khô” is so popular in Vietnam that it has gradually become a familiar snack of street foods family and showed up frequently in Vietnamese weeding parties and death anniversaries. Savoring the utter spiciness of chili, the spicy sweet of dried beef, the crispiness of julienned green papaya, the pungent flavor of herbs and the nutty taste of roasted peanut, you are bound to comprehend how far-reaching its coverage is `}
                img='img10.6.jpg'
                />

            </div> 
        
        </div>
        </> 

    )    

}