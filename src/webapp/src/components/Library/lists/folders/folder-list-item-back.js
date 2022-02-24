import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import FolderLink from './folder-link';

const FolderListItemBack = ({ path }) => {
  const { t } = useTranslation();

  return (
    <ListItem disablePadding>
      <ListItemButton
        component={FolderLink}
        data={{ path }}
        aria-label={t('library.folders.back-button-label')}
      >
        <ArrowBackIcon />
        <ListItemText primary={'..'} />
      </ListItemButton>
    </ListItem>
  );
}

export default FolderListItemBack;
