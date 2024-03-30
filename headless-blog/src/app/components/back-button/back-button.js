'use client'
import { useRouter } from "next/navigation";
import styles from "./back-button.module.scss"
import Arrow from "@/helper/arrow";

const BackButton = ({children, icon}) =>{
    const router = useRouter();
    return(
        
        <button onClick={() => router.back()} className={styles.button}>
            <Arrow className={icon}/>
			{children}
		</button>
    )
}

export default BackButton;