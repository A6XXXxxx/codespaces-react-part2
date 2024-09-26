export default function MouseEvent() {
    return(
        <h1>
            onClick = { e => console.log('onClick')}
            onMouseEvent = {e => console.log('onMo')}
        </h1>
    )
}