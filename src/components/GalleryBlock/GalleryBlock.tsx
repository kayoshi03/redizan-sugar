import style from "./style.module.scss"
import {useAppSelector} from "@/hooks/redux.hooks.ts";
import {getImage} from "@/const/image.ts";

const GalleryBlock = () => {
    const photos = useAppSelector(state => state.photoMain.data)
    return(
        <div className={style.gallery}>
            <h2 className="title"><span className="red">ВАШИ</span> ФОТОГРАФИИ</h2>
            <div className={style.list}>
                {
                    // photos?.length > 8 ?
                    // photos?.map((item) => (
                    //     <img key={Object.keys(item)} src={getImage(item)} alt=""/>
                    // ))
                    //     :
                    photos?.map((item:object) => (
                        <>
                            <img key={Object.keys(item).toString()} src={getImage(item)} alt=""/>
                        </>

                    ))
                }
            </div>
        </div>
    )
}

export default GalleryBlock