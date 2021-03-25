import {queryCars} from "../../service/carService"

const carResolver = {
    Query: {
        cars: queryCars,
    }
}

export default carResolver;