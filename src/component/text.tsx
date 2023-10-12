type textType ={
    value: string,
    style: string,
    clickFunc?:()=>void
}

export const Text=({
    value,
    style,
    clickFunc
}:textType)=><h6 className={style} onClick={clickFunc}>{value}</h6>