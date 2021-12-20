


function bellman(){
    const nodeLen = 10;
    vertical = [{src:1, dst:2, cost:3},{src:4, dst:5, cost:3},{src:2, dst:4, cost:3},{src:3, dst:6, cost:3},{src:1, dst:2, cost:3}];
    let dist = new Array(nodeLen).fill(Infinity);
   /* for(let i = 0 ; i < nodeLen-1; i++){
        for(let {src,dst, cost} of vertical){
            if(dist[dst]==Infinity){
                continue;
            }
            if(dist[dst]>dist[src]+cost){
                dist[dst] = dist[src]+cost;
            }
        }
    }
    for(let {src,dst,cost} of vertical){
        if(dist[dst]>dist[src]+cost){
            console.log('Negative Cycle');
        }
    }
*/
    dist[0] = 0;
console.log(dist);
}

function dijkstra(){
    const nodeLen = 10;
    vertical = [{src:1, dst:2, cost:3},{src:4, dst:5, cost:8},{src:2, dst:4, cost:1},{src:3, dst:6, cost:3},{src:1, dst:2, cost:3}];
    let dist = new Array(nodeLen).fill(Infinity);
    let queue = dist.map(v=>[Infinity,v]);
    queue[0] = [0,0];
    dist[0] = 0;
    while(!queue.empty){
        queue.sort((a,b)=>a[0]-b[0]);
        console.log(queue);
        let [cost, cur] = queue.shift();
        let edge = vertical.filter(a=>a.src==cur);
        for(let {dst,nCost} of edge){
            if(dist[dst] > cost+ nCost){
                dist[dst] = dist[cur] + nCost;
                queue.push([dist[dst],dst]);
            }
        }
        
    }
    console.log(vertical);


}

dijkstra();