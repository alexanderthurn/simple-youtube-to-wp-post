import { Button, Spinner, Flex, FlexBlock } from '@wordpress/components';
import { useState, useEffect } from 'react';

function YoutubeToPostAdminPageList({settings}) {
  const [videos, setVideos] = useState(undefined);
  
  async function createArticle(id) {

    var oldVideos = videos.map((v) => {
      if (v.id === id) v.loading = 'true'
      return v
    })
    setVideos(oldVideos)

    let video = await fetchYoutubeVideoDetails(id)
    
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
        return result
      })
      .then((result) => {
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
        return result.videos
      });
  }
  
  function htmldecode(s){
    window.HTML_ESC_MAP = {
    "nbsp":" ","iexcl":"¡","cent":"¢","pound":"£","curren":"¤","yen":"¥","brvbar":"¦","sect":"§","uml":"¨","copy":"©","ordf":"ª","laquo":"«","not":"¬","reg":"®","macr":"¯","deg":"°","plusmn":"±","sup2":"²","sup3":"³","acute":"´","micro":"µ","para":"¶","middot":"·","cedil":"¸","sup1":"¹","ordm":"º","raquo":"»","frac14":"¼","frac12":"½","frac34":"¾","iquest":"¿","Agrave":"À","Aacute":"Á","Acirc":"Â","Atilde":"Ã","Auml":"Ä","Aring":"Å","AElig":"Æ","Ccedil":"Ç","Egrave":"È","Eacute":"É","Ecirc":"Ê","Euml":"Ë","Igrave":"Ì","Iacute":"Í","Icirc":"Î","Iuml":"Ï","ETH":"Ð","Ntilde":"Ñ","Ograve":"Ò","Oacute":"Ó","Ocirc":"Ô","Otilde":"Õ","Ouml":"Ö","times":"×","Oslash":"Ø","Ugrave":"Ù","Uacute":"Ú","Ucirc":"Û","Uuml":"Ü","Yacute":"Ý","THORN":"Þ","szlig":"ß","agrave":"à","aacute":"á","acirc":"â","atilde":"ã","auml":"ä","aring":"å","aelig":"æ","ccedil":"ç","egrave":"è","eacute":"é","ecirc":"ê","euml":"ë","igrave":"ì","iacute":"í","icirc":"î","iuml":"ï","eth":"ð","ntilde":"ñ","ograve":"ò","oacute":"ó","ocirc":"ô","otilde":"õ","ouml":"ö","divide":"÷","oslash":"ø","ugrave":"ù","uacute":"ú","ucirc":"û","uuml":"ü","yacute":"ý","thorn":"þ","yuml":"ÿ","fnof":"ƒ","Alpha":"Α","Beta":"Β","Gamma":"Γ","Delta":"Δ","Epsilon":"Ε","Zeta":"Ζ","Eta":"Η","Theta":"Θ","Iota":"Ι","Kappa":"Κ","Lambda":"Λ","Mu":"Μ","Nu":"Ν","Xi":"Ξ","Omicron":"Ο","Pi":"Π","Rho":"Ρ","Sigma":"Σ","Tau":"Τ","Upsilon":"Υ","Phi":"Φ","Chi":"Χ","Psi":"Ψ","Omega":"Ω","alpha":"α","beta":"β","gamma":"γ","delta":"δ","epsilon":"ε","zeta":"ζ","eta":"η","theta":"θ","iota":"ι","kappa":"κ","lambda":"λ","mu":"μ","nu":"ν","xi":"ξ","omicron":"ο","pi":"π","rho":"ρ","sigmaf":"ς","sigma":"σ","tau":"τ","upsilon":"υ","phi":"φ","chi":"χ","psi":"ψ","omega":"ω","thetasym":"ϑ","upsih":"ϒ","piv":"ϖ","bull":"•","hellip":"…","prime":"′","Prime":"″","oline":"‾","frasl":"⁄","weierp":"℘","image":"ℑ","real":"ℜ","trade":"™","alefsym":"ℵ","larr":"←","uarr":"↑","rarr":"→","darr":"↓","harr":"↔","crarr":"↵","lArr":"⇐","uArr":"⇑","rArr":"⇒","dArr":"⇓","hArr":"⇔","forall":"∀","part":"∂","exist":"∃","empty":"∅","nabla":"∇","isin":"∈","notin":"∉","ni":"∋","prod":"∏","sum":"∑","minus":"−","lowast":"∗","radic":"√","prop":"∝","infin":"∞","ang":"∠","and":"∧","or":"∨","cap":"∩","cup":"∪","int":"∫","there4":"∴","sim":"∼","cong":"≅","asymp":"≈","ne":"≠","equiv":"≡","le":"≤","ge":"≥","sub":"⊂","sup":"⊃","nsub":"⊄","sube":"⊆","supe":"⊇","oplus":"⊕","otimes":"⊗","perp":"⊥","sdot":"⋅","lceil":"⌈","rceil":"⌉","lfloor":"⌊","rfloor":"⌋","lang":"〈","rang":"〉","loz":"◊","spades":"♠","clubs":"♣","hearts":"♥","diams":"♦","\"":"quot","amp":"&","lt":"<","gt":">","OElig":"Œ","oelig":"œ","Scaron":"Š","scaron":"š","Yuml":"Ÿ","circ":"ˆ","tilde":"˜","ndash":"–","mdash":"—","lsquo":"‘","rsquo":"’","sbquo":"‚","ldquo":"“","rdquo":"”","bdquo":"„","dagger":"†","Dagger":"‡","permil":"‰","lsaquo":"‹","rsaquo":"›","euro":"€"};
    if(!window.HTML_ESC_MAP_EXP)
        window.HTML_ESC_MAP_EXP = new RegExp("&("+Object.keys(HTML_ESC_MAP).join("|")+");","g");
    return s?s.replace(window.HTML_ESC_MAP_EXP,function(x){
        return HTML_ESC_MAP[x.substring(1,x.length-1)]||x;
    }):s;
}
  
  useEffect(() => {
    fetchYoutubeVideos().then((videos) => {
      setVideos(videos);
    });
  }, []);

  var decodeEntities = (function() {
    // this prevents any overhead from creating the object each time
    var element = document.createElement('div');
  
    function decodeHTMLEntities (str) {
      if(str && typeof str === 'string') {
        // strip script/html tags
        str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
        str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
        element.innerHTML = str;
        str = element.textContent;
        element.textContent = '';
      }
  
      return str;
    }
  
    return decodeHTMLEntities;
  })();

  if (!settings.options.yttpYoutubeApiKey || !settings.options.yttpYoutubeChannelId) {
    return <div class="wrap">
        <h2>Welcome to Youtube-To-Post</h2>
         <p>Click <a href="?page=yttp-settings">here</a> to get to the settings page to get started</p>
      </div>
  }

  return (
    <div class="wrap">
    <Flex>
      <FlexBlock>
        <h1>Youtube To Post</h1>

        <table className='wp-list-table widefat fixed striped table-view-list yttp_videos'>
          <thead>
            <th className='manage-column column-title'>Video Title</th>
            <th className='manage-column column-id'>Video Id</th>
            <th className='manage-column column-action column-primary'>
              Action
            </th>
          </thead>
          <tbody>
            {videos == undefined && (
              <tr>
                <td colspan='3'>
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
                  {video.post_id ? <a href={'/wp-admin/post.php?post=' + video.post_id + '&action=edit'}>{decodeEntities(video.title)}</a> : <span>{decodeEntities(video.title)}</span>}
                  </td>
                  <td>{video.id ? <a href={'https://studio.youtube.com/video/' + video.id + '/edit'}>{video.id}</a> : video.id}
                  </td>
                  
                  <td>
                     {video.post_id ? <a  className='button button-secondary' href={'/wp-admin/post.php?post=' + video.post_id + '&action=edit'}>Edit Post</a> : 
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