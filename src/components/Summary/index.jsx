import { Container } from "./style";

export function Summary(props){
    return (
        <Container>
            <div className="top">
            <p>{props.title}</p>
            <img src={props.img} alt="img" />
            </div>
            <p id="money"> {props.value}</p>
        </Container>
    )
}