import React from 'react';
import RepoItem from './Components/RepoItem';

const RepoList = ({repositorio}) => (

    <div className="repoListContainer">
       {repositorio.map(repositorio => (
           <RepoItem
            repositorio={repositorio}
           ></RepoItem>
       ))}
    </div>
);

export default RepoList;