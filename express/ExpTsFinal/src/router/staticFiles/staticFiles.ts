import express, { Router } from "express";

const publicPath = `${process.cwd()}/src/public`;
const staticFiles = Router();

staticFiles.use('/css', express.static(`${publicPath}/css`));
staticFiles.use('/js', express.static(`${publicPath}/js`));
staticFiles.use('/img', express.static(`${publicPath}/img`));
staticFiles.use('/assets', express.static(`${publicPath}/assets`));


export default staticFiles;