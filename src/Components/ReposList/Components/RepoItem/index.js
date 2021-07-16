import React from 'react';

const RepoItem = ({repositorio}) => (

    <a 
    href={repositorio.html_url}
    key={repositorio.id}
    className="repoItemContainer"
    target="_blank">
        
        <span>{repositorio.name}</span>
        <span>{repositorio.stargazers_count}</span>
        <span>{repositorio.forks}</span>
        <span>{repositorio.open_issues}</span>
    </a>
);

export default RepoItem;