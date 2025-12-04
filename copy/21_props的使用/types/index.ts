//定义了一个接口，用于限制person对象的具体属性 
//export是为了让其他文件可以使用这个接口，分别暴露
export interface PersonInterface {
    id: string;
    name: string;
    age: number;
    //x?: number; //可选属性
}

//export const a = 999;

//自定义类型
//export type Persons = Array<PersonInterface>;  //等同于下面的写法
export type Persons = PersonInterface[];