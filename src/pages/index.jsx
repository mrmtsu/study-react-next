import { useCallback, useEffect, useState } from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
    }
  }, [count]);

  const handleIsShow = () => {
    setIsShow((isShow) => !isShow);
  };

  const onChangeText = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert('5文字以内にしてください');
      return;
    }
    setText(e.target.value);
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";

    // unmount時の処理
    return () => {
      document.body.style.backgroundColor = "";
    }
  }, [count]);

  return (
    <div className={styles.container}>
      <Header />
      { isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleIsShow}>{ isShow ? "非表示" : "表示"}</button>
      <input type="text" value={text} onChange={onChangeText} />
      <Main page="index" />
      <Footer />
    </div>
  )
}
