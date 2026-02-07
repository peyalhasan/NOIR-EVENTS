import { GoogleMapsEmbed } from '@next/third-parties/google'

export default function EventMap({ location }) {
    return (
        <GoogleMapsEmbed
            apiKey={process.env.MAP_API_KEY}
            height={450}
            width="100%"
            mode="place"
            q={location}
            zoom={13}
        />
    )
}