class Post<A>{
    content:A;
}

class A{

}

class B extends A{

}


class C{

}

let x:Post<C> = new Post<C>();