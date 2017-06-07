
export interface SuggestiveModel{
    id:string
    title: string,
    FirstOrder: number,
    SecondOrder?: number,
    ThirdOrder?: number,
    label: string
}

export function GetKeyword({id,title,FirstOrder,SecondOrder,ThirdOrder,label}:any): SuggestiveModel{
    return{id ,title,FirstOrder,SecondOrder,ThirdOrder,label};
}

export function GetKeywords(data:any[]): SuggestiveModel[]{
    return data.map(GetKeyword);
}