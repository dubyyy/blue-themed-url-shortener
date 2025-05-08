'use client'
import Image from "next/image";
import css from './Home.module.css'
import Hero from "./components/hero";
export default function Home() {
  return (
    <>
    <div className={css.head}>
       <p>Simple,fast URL shortener</p>
       <p>Shorten your long links with ease and simplicity</p>
    </div>
    <Hero />
   
    </>
  );
}
