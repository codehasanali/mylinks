export interface LanyardData {
    success: boolean
    data: LanyardData
    spotify: Spotify | null
    discord_user: Discorduser
    discord_status: "online" | "offline" | "idle" | "dnd"
    activities: Activity[]
    listening_to_spotify: boolean
    active_on_discord_mobile: boolean
    active_on_discord_desktop: boolean
}

export interface Spotify {
    track_id: string
    timestamps: Timestamps
    song: string
    artist: string
    album_art_url: string
    album: string
}

export interface Timestamps {
    start: number
    end?: number
}

export interface Activity {
    type: number
    state: string
    name: string
    id: string
    emoji?: Emoji
    created_at: number
    application_id?: string
    timestamps?: Timestamps
    session_id?: string
    details?: string
    buttons?: string[]
    assets?: Assets
}

export interface Assets {
    small_text: string
    small_image: string
    large_text: string
    large_image: string
}

export interface Timestamps {
    start: number
    end?: number
}

export interface Emoji {
    name: string
    id: string
    animated: boolean
}

export interface Discorduser {
    username: string
    public_flags: number
    id: string
    discriminator: string
    avatar: string | null
}

export type Song = {
    isPlaying?: boolean
    name: string
    artist: string
    album: string
    albumImage: string
    songUrl: string
}