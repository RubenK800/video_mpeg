<?php namespace App\Http\Middleware;

use Closure;

class Cors {
    private static $allowedOriginsWhitelist = [
        'http://localhost:8000'
    ];

    // All the headers must be a string

    private static $allowedOrigin = '*';

    private static $allowedMethods = 'OPTIONS, GET, POST, PUT, PATCH, DELETE';

    private static $allowCredentials = 'true';

    private static $allowedHeaders = '';

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
//        if (! $this->isCorsRequest($request))
//        {
//            return $next($request);
//        }
//
//        static::$allowedOrigin = $this->resolveAllowedOrigin($request);
//
//        static::$allowedHeaders = $this->resolveAllowedHeaders($request);

        $headers = [
            'Access-Control-Allow-Origin'       => static::$allowedOrigin,
            'Access-Control-Allow-Methods'      => static::$allowedMethods,
            'Access-Control-Allow-Headers'      => static::$allowedHeaders,
            'Access-Control-Allow-Credentials'  => static::$allowCredentials,
        ];

        // For preflighted requests
        if ($request->getMethod() === 'OPTIONS')
        {
            return response('', 200)->withHeaders($headers);
        }

        $response = $next($request)->withHeaders($headers);

        return $response;
    }


}
