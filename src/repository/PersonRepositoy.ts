import {Person} from '../model/Person'

export const getPerson = () => {
    return Person.findAll();
}