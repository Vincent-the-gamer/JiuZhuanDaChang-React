import Stack from "@/utils/Stack";
import { useEffect, useMemo, useState } from "react";
import DialogItem from "../DialogItem";
import "./Main.less";
import { useAutoAnimate } from '@formkit/auto-animate/react';

interface Item {
  isLeft: boolean,
  content: string
}

export default function Main() {

  // false代表曹可凡, true代表俞涛
  const [itemArr, setItemArr] = useState<Item[]>([
    {isLeft: false, content: "你自己尝了吗？"},
    {isLeft: true, content: "尝了一块"}
  ]);

  // 使用自己实现的栈，用计算属性缓存，不然每次都要重新执行
  const stack: Stack<Item> = useMemo<Stack<Item>>(() => {
    return new Stack<Item>();
  },[]);

  // 使用动画
  const [itemList, enableAnimations] = useAutoAnimate({
    duration: 350,
    easing: "ease-in"
  });
  
  useEffect(() => {
    // 逆序放入栈，才能正序出栈
    stack.setStack([
      {isLeft: false, content: "感觉怎么样？"},
      {isLeft: true, content: "我去除了大部分的肠的腥味，但是我保留了一部分，我觉得保留了一部分肠的味道，才知道你吃的是大！肠！"},
      {isLeft: false, content: "你是有意把它保留的吗?"},
      {isLeft: true, content: "是清洗的过程中，我留下了一部分"},
      {isLeft: false, content: "是故意的还是不小心?"},
      {isLeft: true, content: "是！故！意！的！"}
    ].reverse())
  }, []);
  
  function addItem(){
    if( !stack.isEmpty() ){
      setItemArr([...itemArr, stack.pop() ])
    }
    else alert("内容栈已空，所有内容都已经加完啦！");
  }

  function deleteItem(){
    if(itemArr.length < 2){
      alert("不要删光！(*╹▽╹*)");
    }
    else{
      const deletedItem: Item[] = itemArr.splice(itemArr.length - 1, 1)
      setItemArr([...itemArr]);
      stack.push(deletedItem[0]);
    }
  }

  return (
    <>
        <div className="main" ref={ itemList }>
          {
            itemArr.map((item, index) => (
              <DialogItem isLeft={ item.isLeft } content={ item.content } key={ index } />
            ))
          }
          <div className="buttons">
              <button className="addOne" onClick={ addItem }>增加一条对话</button>
              <button className="deleteOne" onClick={ deleteItem }>删除一条对话</button>
          </div>
        </div>
    </>
  )
}


