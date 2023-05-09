import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AboutSerivces from './Article1';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './ArticleList.css';
import Box from '@mui/material/Box';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [type, setType] = useState('Phishing');



  // 当文章类型发生变化时，从后端获取相应类型的文章列表
  useEffect(() => {
    if (type) {
      // 根据选择的类型获取文章数据
      axios.get(`http://localhost:3080/getArticle?type=${type}`)
        .then(response => {
          // 检查收到的数据是否为数组
          if (Array.isArray(response.data.articles)) {
            // 更新文章列表状态
            setArticles(response.data.articles);
          } else {
            // 如果收到的数据格式不符合预期，打印错误信息
            console.error('Unexpected data format received:', response.data.articles);
          }
        });
    }
  }, [type]); 

 
    const handleTypeChange = (event) => {
        setType(event.target.value);
    };
  
  return (
    <div>
        {/* <select onChange={handleTypeChange}>
        <option value="">Please Selet The type</option>
        <option value="type1">Phishing</option>
        <option value="type2">Type2</option>
        </select> */}
      
      <Box display="flex" justifyContent="center" marginBottom="2rem">
      <FormControl sx={{ m: 1, minWidth: 220 }} className="centerSelect">
        <InputLabel id="demo-simple-select-helper-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={type}
          label="Type"
          onChange={handleTypeChange}
        >
          <MenuItem value="Phishing">Phishing</MenuItem>
          <MenuItem value="Virus and malware removal">Virus and malware removal</MenuItem>
          <MenuItem value="Identity theft">Identity theft</MenuItem>
          <MenuItem value="Bullying and harassment">Bullying and harassment</MenuItem>
          <MenuItem value="Password">Password</MenuItem>

        </Select>
        <FormHelperText>Select the Article Type you want to read</FormHelperText>
      </FormControl>
      </Box>

      {articles.map(article => (
        <AboutSerivces key={article.Id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
