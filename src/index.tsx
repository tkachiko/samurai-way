import React from 'react';
import './index.css';
import {state} from './Redux/state';
import {renderTree} from './renderTree';

renderTree(state);