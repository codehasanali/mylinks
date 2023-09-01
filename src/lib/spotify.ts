
import fetch from 'node-fetch'

const SPOTIFY_CLIENT_ID ="08a2cf90ad464fb4b85a6e40b082e544"
const SPOTIFY_CLIENT_SECRET = "29dffa1872a6422c9de0be235f2a7a07"
const SPOTIFY_REFRESH_TOKEN = "AQB0kWCablFaUajRIsq1NcYGIno9tnuZy3EE9wlYLC8k_bipN-ZqOKlT4AKSKvztLzmZ-tOSBrrsJBZNrrweLCrFH7hRV8QoOhXsWp1drgKKfNMa2qOKH-OsfsKOz0LWnRk"


const SPOTIFY_TOKEN = "https://accounts.spotify.com/api/token"
const SPOTIFY_CURRENTLY_PLAYING = "https://api.spotify.com/v1/me/player/currently-playing"
const SPOTIFY_RECENTLY_PLAYED = "https://api.spotify.com/v1/me/player/recently-played"
const SPOTIFY_TOP_ARTISTS = "https://api.spotify.com/v1/me/top/artists"

const basic = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64')

type Response = {
    access_token: string
    token_type: string
    scope: string
    expires_in: number
    refresh_token: string
}

const getAccessToken = async () => {
    const response = await fetch(SPOTIFY_TOKEN, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            'grant_type': 'refresh_token',
            'refresh_token': `${SPOTIFY_REFRESH_TOKEN}`
        })
    })

    return response.json()
}

export const getCurrentlyPlaying = async () => {
    const {access_token}: Response = await getAccessToken() as Response

    return await fetch(SPOTIFY_CURRENTLY_PLAYING, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    })
}


export const getRecentlyPlayed = async () => {
    const {access_token}: Response = await getAccessToken() as Response

    return await fetch(SPOTIFY_RECENTLY_PLAYED, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    })
}

type TopArtistItem = {
    name: string
    uri: string
    genres: string[]
}

type TopArtistsResponse = {
    items: TopArtistItem[]
}

export const getTopArtist = async () => {
    const {access_token}: Response = await getAccessToken() as Response

    const response = await fetch(SPOTIFY_TOP_ARTISTS, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    }).then(r => r.json()) as TopArtistsResponse

    const artist = response.items[0].name
    const uri = response.items[0].uri

    return {
        artist,
        uri
    }
}

export const getTopGenre = async () => {
    const {access_token}: Response = await getAccessToken() as Response

    const response = await fetch(SPOTIFY_TOP_ARTISTS, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    }).then(r => r.json()) as TopArtistsResponse

    let genre = response.items[0].genres[0]
    genre = genre.charAt(0).toUpperCase() + genre.slice(1)

    return {
        genre
    }
}