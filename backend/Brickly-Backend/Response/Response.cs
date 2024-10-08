﻿namespace Brickly_Backend.Response
{
    public class Response<T>
    {
        public bool Status { get; set; }
        public T? Data { get; set; }
        public string? Message { get; set; }
    }
}
