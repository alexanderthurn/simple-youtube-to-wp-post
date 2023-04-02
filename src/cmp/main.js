import YoutubeToPostAdminPageList from './videos';
import YoutubeToPostAdminPageSettings from './settings';

function YoutubeToPostAdminPageMain({settings}) {
  switch (settings.route) {
    case 'yttp-settings':
      return <YoutubeToPostAdminPageSettings settings={settings} />;
    default:
      return <YoutubeToPostAdminPageList settings={settings} />;
  }
}

export default YoutubeToPostAdminPageMain;
