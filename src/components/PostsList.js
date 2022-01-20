import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { selectAllPosts } from "./../slices/postsSlice"


export const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  // omit component contents
}