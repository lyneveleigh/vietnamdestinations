import React from "react";
import "../../App.css";
import "./Beaches.css";
import BeachCard from "../BeachCard";

export default function beaches() {
  return (
    <>
      <h1 className="beaches">Amazing Beaches</h1>
      <div>
        <p className="beach-text">
        "Beautiful beaches with delicious sea food and surprisingly cheap prices are all reasons you should go to Vietnam." <i class="fas fa-umbrella-beach"></i>
        </p> 
      </div>

      <div className="beach-body">
        <div className="beach-info">
          <BeachCard
            header="Nha Trang"
            body="About 6 kilometers in the length of bright sand, Nha Trang Beach is home to many luxury hotels and resorts. At any time, tourists can have opportunities to soak in the water, build up some pretty sandcastles, or lie on the pristine beach. In the afternoon, you can walk along the beach or simply sit still and watch the magnificent sunset to end the day."
            img="img11.jpg"
          />

          <BeachCard header="Da Nang" body="The best beaches in Da Nang are known for their clean waters and sands. The more popular ones, such as My Khe and Non Nuoc are relatively close to the city centre. Less than 10 minutes away by car, they’re often packed with locals during weekends and public holidays. You can also find plenty of local restaurants serving fresh seafood and Da Nang specialities at affordable prices." img="img12.jpg" />

          <BeachCard header="Phu Quoc" body="Phu Quoc is well known in Vietnam, especially for its beaches. The island is said to own the most beautiful beaches in Vietnam and is therefore widely advertised as a holiday paradise." img="img13.jpg" />
          <BeachCard header="Vung Tau" body="Cheap Vung Tau Vacations: Find travel packages to Vung Tau on beach reviews by comparing best Vung Tau guide for hotel reviews. Vung Tau has long been considered an attractive tourist destination, because of its natural beauty. Wherever you travel in Vung Tau, visitors will be fascinated by the scenery of this beautiful not so far beach town south of Ho Chi Minh City." img="img14.jpg" />

          <BeachCard header="Cat Ba" body="Cat Ba Island is the largest island in Halong Bay and is home to plenty of hotels, restaurants, and bars. Just about every tour company in Hanoi offers daily trips to the island, attracting travellers looking to enjoy a day of sightseeing during their holiday. Located off the coast of Hai Phong City, its beaches (named Cat Co 1 and Cat Co 2) are great for sunbathing and swimming during the summer months. If you’re not a fan of crowds on the beach, you can charter a speedboat or rent a kayak to Monkey Island and Lan Ha Bay, where the beaches are cleaner and quieter." img="img15.jpg" />

          <BeachCard header="Ha Long Bay" body="Hạ Long Bay, in northeast Vietnam, is known for its emerald waters and thousands of towering limestone islands topped by rainforests. Junk boat tours and sea kayak expeditions take visitors past islands named for their shapes, including Stone Dog and Teapot islets. The region is popular for scuba diving, rock climbing and hiking, particularly in mountainous Cát Bà National Park." img="img16.jpg" />

          <BeachCard header="Ninh Van" body="The illusion is that you're on a remote island. The reality is that Six Senses Ninh Van Bay sits on a dramatic bay looking out to the East Vietnam Sea so it can only be approached by water. Impressive rock formations, white sand beach and a backdrop of towering mountains add to the fantasy. You can't be more intimately at one with nature" img="img17.jpg" />

          <BeachCard header="Con Dao" body="Con Dao Islands, also known as Con Dao National park, are an archipelago of 16 mostly uninhabited islets just off the southern coast of Vietnam, each of which offering expansive beaches shaded with evergreen trees. Great for savvy travellers looking to escape bustling city life, the main island also boasts miles of coastal roads, hiking trails and a wide range of outdoor activities." img="img18.jpg" />
        </div>
      </div>
    </>
  );
}
