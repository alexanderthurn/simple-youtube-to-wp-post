import { withNotices, Button, Spinner, Flex, FlexBlock, FlexItem, Text, TextControl } from '@wordpress/components';
import { useState, useEffect } from 'react';

const YoutubeToPostAdminPageSettings = withNotices( ({ noticeOperations, noticeUI, settings }) => {
  console.log('rendering settings', settings);

  const [youtubeApiKey, setYoutubeApiKey] = useState(settings.options.yttpYoutubeApiKey)
  const [youtubeChannelId, setYoutubeChannelId] = useState(settings.options.yttpYoutubeChannelId)

  useEffect(() => {
    
  }, []);

  console.log('rendering settings');



  function saveSettings() {
    const data = new FormData();
    data.append('action', 'yttp_options');
    data.append('nonce', settings.nonce);
    data.append('yttpYoutubeApiKey', youtubeApiKey);
    data.append('yttpYoutubeChannelId', youtubeChannelId);

    const paramsAsQueryString = new URLSearchParams(data);
    noticeOperations.removeAllNotices()
    noticeOperations.createNotice( { status: 'success', content: 'Saving' } );


    fetch(settings.ajaxUrl + '?' + paramsAsQueryString, {
      method: 'POST',
      body: data,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('updateSettings', result);
        //alert('Saved')
        noticeOperations.removeAllNotices()
        noticeOperations.createNotice( { status: 'success', content: 'Settings saved' } );
      });

  }

  return (
    <div class='wrap'>
      <Flex>
        <FlexBlock>
          <h1>Youtube To Post Settings</h1>
          { noticeUI }
          <div className="wrap">
            <TextControl type="password" label="Youtube API Key" value={youtubeApiKey} onChange={(v) => {setYoutubeApiKey(v)}} placeholder="AIza...........nqCQ" />
            <TextControl type="text" label="Youtube Channel ID" value={youtubeChannelId} onChange={(v) => {setYoutubeChannelId(v)}} placeholder="UCzN_yRlMz4pyW-LJZJrxTRw" />
            <Button className='button button-primary' onClick={() => saveSettings()}>Save Changes</Button>
          </div>
         
        </FlexBlock>
      </Flex>
    </div>
  );
})

export default YoutubeToPostAdminPageSettings;
