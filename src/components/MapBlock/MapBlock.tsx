import {Placemark, Map, YMaps} from "@pbe/react-yandex-maps";
import style from "./style.module.scss"
import LinkUI from "@/ui/Link/LinkUI.tsx";

const LOCATION:ymaps.IMapState = {
    center: [55.157335, 61.376417],
    zoom: 16,
    type: "yandex#map"
};

const MapBlock = () => {

    return (
        <div className={style.map}>
            <div className={style.card}>
                <h4>Место проведения <span className="red">квеста</span>:</h4>
                <LinkUI
                    title="Ул.Сони Кривой 69"
                    path="https://yandex.ru/maps/56/chelyabinsk/?indoorLevel=1&ll=61.377732%2C55.157566&mode=poi&poi%5Bpoint%5D=61.376383%2C55.157421&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D101442400246&z=16.84"
                    nav="link"
                    target="_blank"
                />
            </div>
            <YMaps>
                <Map
                    defaultState={LOCATION}
                    width="100%"
                    height="700px"
                    defaultOptions={{
                        copyrightProvidersVisible: false,
                    }}
                >
                    <Placemark geometry={[55.157335, 61.376417]} options={{iconColor: "#8F111C"}}/>
                </Map>
            </YMaps>

            <div className={style.mask}>

            </div>
        </div>
    )
}

export default MapBlock