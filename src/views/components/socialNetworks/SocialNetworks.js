import React from 'react';
import { SocialIcon } from 'react-social-icons';

const SocialNetworks = () => {
    const links = [
        { name: "Youtube", urlSocialNetwork: "https://www.youtube.com/savagejoan" },
        { name: "Spotify", urlSocialNetwork: "https://open.spotify.com/artist/20Cxf65bhLPgZpRBbyindk?si=Md_AzIfxSS-IbbbXTeUHvA" },
        { name: "Instagram", urlSocialNetwork: "https://www.instagram.com/savage.joan" },
        { name: "Facebook", urlSocialNetwork: "https://www.facebook.com/savagejoan" },
    ];

    return (
        <div className="flex flex-row justify-center mb-4">
            {links.map((link) => (
                <SocialIcon url={link.urlSocialNetwork} bgColor="white"
                    style={{ height: 40, width: 40, marginInline: 5 }}
                />
            ))}
        </div>
    );
}
 
export default SocialNetworks;