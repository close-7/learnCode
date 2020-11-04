const func1 = () => {
    func2();
};
const func2 = () => {
    func3();
};
const func3 = () => {};

func1();

//函数func1最先调用，func3最后调用。
//函数func3最先执行完，func1最后执行结束
//符合栈后进先出