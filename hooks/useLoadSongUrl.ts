import { Song } from "@/types";
import { SupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const useLoadSongUrl = (song: Song)=>{
    const supabaseclient = useSupabaseClient()

    if(!song){
        return ''
    }

    const {data: SongData}= supabaseclient.storage.from('songs').getPublicUrl(song.song_path)

    return SongData.publicUrl
}

export default useLoadSongUrl;