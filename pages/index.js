import React, { useState } from "react";
import {Index} from '../components/index';


export default function Home(props) {
  
  const [word] = useState(props.featuredEvents);
  
  const selectedWord = word[Math.floor(Math.random() * word.length)];

  return (
    <>
        <Index selectedWord={selectedWord} word={word}/>
    </>
  )
}

export async function getStaticProps() {
  const response = await fetch(
    "https://sastec-dd32d-default-rtdb.firebaseio.com/events.json"
  );

  const data = await response.json();
  const transformedSales = [];
  
for (const key in data) {
      transformedSales.push(
        data[key].title
    );
  }
    return {props: { featuredEvents : transformedSales }};
}
