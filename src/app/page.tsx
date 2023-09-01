"use client"


import React, { useState,useEffect } from "react";
import {LanyardData} from "@/types/lanyard";
import {ThemeToggle} from "@/components/theme-toggle";
import {FaBirthdayCake, FaDiscord} from "react-icons/fa";
import {FaGithub, FaLocationArrow, FaSpotify, FaTwitter, FaYoutube} from "react-icons/fa6";
import {LinkCardIcon} from "@/components/link-card-icon";
import {LinkCard} from "@/components/link-card";
import {FadeUpDiv, FadeUpStagger} from "@/components/animation";
import   Spotify from '@/components/spotify'
import {LinkCardName} from "@/components/link-card-name";
import  {useLanyard} from "react-use-lanyard";

import type { Activity } from "react-use-lanyard";
export default function  Home() {


// eslint-disable-next-line react-hooks/rules-of-hooks
const {loading,status} = useLanyard({
	userId:"712019941867520053",
	socket:true
})
	const  statususer =  status?.discord_status.toUpperCase()
	return(
    <main className="container py-6 space-y-6 lg:my-10">
		<FadeUpStagger>

			<div className="h-16 flex items-center justify-end">
            <ThemeToggle/>
			</div>
			<div className='grid grid-cols-12 grid-rows-3 gap-5 lg:gap-6'>
    <FadeUpDiv
		className='col-span-12 lg:col-span-4 row-span-3 space-y-5 md:space-y-7 lg:space-y-8' >
	<img
		className='w-[400px] lg:w-[500px] pointer-events-none rounded-xl shadow-xl'
		src="https://wallpaperaccess.com/full/4910984.gif"
        alt=""
	/>
		<section>
			<h1 className='text-3xl lg:text-4xl font-black'>Hasan Ali Arıkan</h1>
			<h2 className='text-muted-foreground text-lg lg:text-xl'>Coding </h2>
		</section>
		<div className='grid gap-1'>
			<div className='flex gap-2 items-center text-muted-foreground'>
				<FaBirthdayCake/>
				<p>26.05.2004</p>
			</div>
			<div className='flex gap-2 items-center text-muted-foreground'>
				<FaLocationArrow/>
				<p>Manavgat / Turkey</p>
			</div>
		</div>
</FadeUpDiv>
			<LinkCard
				className='col-span-12 md:col-span-6 lg:col-span-4 font-bold hover:border-discord p-6'
				href=""
				isGrid
			>
				<LinkCardIcon className='bg-discord'>
					<FaDiscord size={25}/>
				</LinkCardIcon>
				{status?.discord_status ? (
					<LanyardStatus color={
						status?.discord_status === "online" ? "bg-green-300" :
							status?.discord_status === "dnd" ? "bg-red-500" :
								status?.discord_status === "idle" ? "bg-yellow-300" : "bg-gray-500"
					} name={status.discord_user.username} />
				) : null}
				<LinkCardName	 name='Status' id={statususer}/>
			</LinkCard>
				<LinkCard
					className='col-span-12 font-bold md:col-span-6 lg:col-span-4 hover:border-green-700 p-6'
					href="https://open.spotify.com/user/wvcf40k4e2xigsfzarlg4fh3y"
					isGrid
				>
					<LinkCardIcon className="bg-spotify"><FaSpotify size={25} />
					</LinkCardIcon>
					<Spotify/>
				</LinkCard>

				<LinkCard
					className='col-span-6  font-bold md:col-span-3 lg:col-span-4 hover:border-youtube p-6'
					href="https://www.youtube.com/@hasanaliarikan7248"
					isGrid
				>
					<LinkCardIcon className="bg-youtube">

						<FaYoutube size={25} />

					</LinkCardIcon>
					<LinkCardName	 name='YouTube' id='@hasanaliarikan7248'/>

				</LinkCard>

				<LinkCard
					className='col-span-6  font-bold md:col-span-3 lg:col-span-4 hover:border-twitter p-6'
					href="https://twitter.com/codehasanali"
					isGrid
				>
					<LinkCardIcon className="bg-twitter">
						<FaTwitter size={25} />
					</LinkCardIcon>
					<LinkCardName	 name='YouTube' id='@codehasanali'/>
				</LinkCard>
				<LinkCard
					className='flex font-bold justify-between col-span-12 md:col-span-6 lg:col-span-4 hover:border-black dark:hover:border-gray-500 p-6'
					href='https://github.com/codehasanali'
				>
					<div className='grid gap-3'>
						<LinkCardIcon className='bg-github'>
							<FaGithub size={25}/>
						</LinkCardIcon>
						<LinkCardName name='GitHub' id='@codehasanali'/>
					</div>
					<div className='grid grid-cols-2 gap-3'>
						<img className='w-8 h-8' src='/programLangs/Go.svg' alt='go'/>
						<img className='w-8 h-8' src='/programLangs/TypeScript.svg' alt='typescript'/>
						<img className='w-8 h-8' src='/programLangs/Rust.svg' alt='rust'/>
					</div>
				</LinkCard>



			</div>
		</FadeUpStagger>
    </main>
  )
}



function LanyardStatus({ color ,name}: { color: string,name:string }) {
	return (
		<div className="relative inline-flex items-center mr-3">
			<div className="absolute flex h-3 w-3">
				<div
					className={`absolute inline-flex w-full h-full ${color}  rounded-full animate-ping`}
				></div>
				<div
					className={`relative inline-flex w-3 h-3 ${color} rounded-full`}
				></div>
			</div>
			<span className={`ml-6 text-xl `}>{name} </span>
		</div>
	);
}