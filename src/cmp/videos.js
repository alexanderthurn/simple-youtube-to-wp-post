import { Button, Spinner, Flex, FlexBlock } from '@wordpress/components';
import { useState, useEffect } from 'react';

function YoutubeToPostAdminPageList({settings}) {
  console.log('rendering videos', settings);
  const [videos, setVideos] = useState(undefined);
  
  async function createArticle(id) {
    console.log('creating article ' + id);

    var oldVideos = videos.map((v) => {
      if (v.id === id) v.loading = 'true'
      return v
    })
    setVideos(oldVideos)

    let video = await fetchYoutubeVideoDetails(id)
    console.log(video);
    
    const data = new FormData();
    data.append('action', 'yttp_creatArticle');
    data.append('nonce', settings.nonce);
    data.append('id', video.id);
    data.append('title', video.title);
    data.append('description', video.description);
    data.append('thumbnail', video.thumbnail);

    const wpResult = await fetch(settings.ajaxUrl, {
      method: 'POST',
      body: data,
    }).then((response) => response.json());

    var newVideos = videos.map((v) => {
      if (v.id === id) {
        v.post_id = wpResult.post_id
        v.loading = false
      }
      return v
     })

    setVideos(newVideos)
  }

  function fetchYoutubeVideoDetails(id) {
    const data = new FormData();
    data.append('action', 'yttp_fetchYoutubeVideos');
    data.append('nonce', settings.nonce);
    data.append('VIDEO_ID', id);
    const paramsAsQueryString = new URLSearchParams(data);

    return fetch(settings.ajaxUrl + '?' + paramsAsQueryString, {
      method: 'POST',
      body: data,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('fetchYoutubeVideoDetails', result);
        return result
      })
      .then((result) => {
        console.log('fetchYoutubeVideoDetails2', result);
        return result.videos[0];
      });
  }

  function fetchYoutubeVideos() {
    const data = new FormData();
    data.append('action', 'yttp_fetchYoutubeVideos');
    data.append('nonce', settings.nonce);
    const paramsAsQueryString = new URLSearchParams(data);

    return fetch(settings.ajaxUrl + '?' + paramsAsQueryString, {
      method: 'POST',
      body: data,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('fetchYoutubeVideos', result);
        return result.videos
      });
  }

  useEffect(() => {
    fetchYoutubeVideos().then((videos) => {
      console.log('setVideos', videos);
      setVideos(videos);
    });
  }, []);

  console.log('rendering', videos, settings);
  
  if (!settings.options.yttpYoutubeApiKey || !settings.options.yttpYoutubeChannelId) {
    return <div class="wrap">
        <h2>Welcome to Youtube-To-Post</h2>
        In order to use this plugin, you just need to configure your <b>youtube-channel-id</b> and your <b>youtube-api-key</b>. It is not difficult, totally free and can be done in settings. I will help you to set it up.
        <p>Click <a href="">here</a> to get to the settings page to get started</p>
        <p>Hint: This plugin is 100% free and open source. You can check and modify the sourcecode on Github</p>
      </div>
  }

  return (
    <div class="wrap">
    <Flex>
      <FlexBlock>
        <h1>Youtube To Post</h1>

        <table className='wp-list-table widefat fixed striped table-view-list yttp_videos'>
          <thead>
            <th className='manage-column column-title'>Title</th>
            <th className='manage-column column-id'>Id</th>
            <th className='manage-column column-action column-primary'>
              Action
            </th>
          </thead>
          <tbody>
            {videos == undefined && (
              <tr>
                <td colspan='10'>
                  <Spinner />
                </td>
              </tr>
            )}

            {videos !== undefined && videos.length == 0 && (
              <tr>
                <td colspan='3'>0 results from youtube. Make sure you configured your Youtube-Channel-Id and your Youtube-Api-Key correctly under 'Settings'</td>
              </tr>
            )}

            {videos !== undefined &&
              videos.length > 0 &&
              videos.map((video) => (
                <tr>
                  <td>
                  {video.post_id ? <a href={'/wp-admin/post.php?post=' + video.post_id + '&action=edit'}>{video.title}</a> : video.title}
                  </td>
                  <td>{video.id}</td>
                  
                  <td>
                     {video.post_id ? <a  className='button button-secondary' href={'/wp-admin/post.php?post=' + video.post_id + '&action=edit'}>Open Post</a> : 
                     (video.loading ? <Spinner /> : <Button
                      className='button button-primary'
                      onClick={() => {
                        createArticle(video.id);
                      }}
                    >
                      Create post
                    </Button>)}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </FlexBlock>
    </Flex>
    </div>
  );
}

export default YoutubeToPostAdminPageList;