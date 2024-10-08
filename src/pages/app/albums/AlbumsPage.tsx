import style from "@/components/GalleryBlock/style.module.scss";
import {getImage} from "@/const/image.ts";
import {useAppSelector} from "@/hooks/redux.hooks.ts";

const AlbumsPage = () => {
    const photos = useAppSelector(state => state.photoMain.data)
    return(
        <div className={style.gallery}>
            <h2 className="title">ФОТОГАЛЕРЕЯ</h2>
            <div className={style.list}>
                {
                    photos?.map((item) => (
                        <img key={Object.keys(item).toString()} src={getImage(item)} alt=""/>
                    ))
                }
            </div>
        </div>
    )
}

export default AlbumsPage