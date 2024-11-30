import { useEffect, useState } from "react";
import { TabNav } from "../../widgets/tabnav";
import { Cards } from "../card";
import { Title } from "../title";

import mockData from "../../data/items.json";
import mockCategoryData from "../../data/categories.json";
import styles from "./styles.module.css";

export const Collections = () => {
  const [collectionList, setCollectionList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [activeCategory, setActiveCategory] = useState({});
  const [searchvalue, setSearchvalue] = useState("");

  useEffect(() => {
    setCollectionList(mockData);
    setCategoryList(mockCategoryData);
  }, []);

  let filteredlist = collectionList.filter((collection) => {
    if (!activeCategory?.id || activeCategory.id === "allfiles") return true;

    if (collection.type === activeCategory.id) return true;

    return false;
  });

  let searchFilteredList = filteredlist.filter((list) =>
    list.title.includes(searchvalue)
  );

  return (
    <div className={styles.container}>
      <div>
        <Title
          onSearch={(value) => {
            setSearchvalue(value);
          }}
        />
      </div>
      <div>
        <TabNav
          dataSource={categoryList}
          onChange={(value) => {
            setActiveCategory(value);
          }}
        />
      </div>
      <div>
        <Cards
          dataSource={searchFilteredList}
          onSave={(card) => {
            let tempCollection = collectionList.map((collection) => {
              if (collection.id === card.id) {
                return card;
              } else {
                return collection;
              }
            });
            setCollectionList(tempCollection);
          }}
        />
      </div>
    </div>
  );
};
