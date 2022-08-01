import React , {Component} from 'react'

export default class Gif extends Component {

    constructor () {
        super()
        this.state = {
            gif: ""
        }
    }

    apiCall (url, handler) {
        fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {
            handler(data)
        })
        .catch((e)=>{
            console.log(e);
        })
    }

    componentDidMount () {
        console.log('Monté el Componente');
        this.gifNuevo()
    }

    gifNuevo () {
        this.apiCall('https://api.giphy.com/v1/gifs/random?api_key=nRGsNKmSr7PX3V0kWVAnoMTD4Gd2FEDo&tag=&rating=g', this.mostrarGif)
    }

    mostrarGif = (data) => {
        // console.log(data);
        this.setState(
            {
                gif: data.data.images.original.url
            }
        )
    }

    componentDidUpdate () {
        console.log('Actualicé el Componente');
    }

    render () {

        let contenido

        if (this.state.gif == "") {
            contenido = <p>Cargando...</p>
        } else {
            contenido = <img src={this.state.gif} alt="" />
        }

        return (
            <div>
                {contenido}
                <br />
                <button onClick={ () => this.gifNuevo() }>Random Gif</button>
            </div>
        )
    }
}